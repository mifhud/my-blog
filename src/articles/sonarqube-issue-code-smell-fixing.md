---
layout: article.njk
title: "SonarQube Issue and Code Smell Fixing with MCP and Claude Code"
date: 2025-12-09
category: Code Quality
tags: 
  - articles
  - SonarQube
  - Claude Code
  - MCP
  - Code Quality
  - Automation
  - AI Tools
author: Development Team
description: "A comprehensive guide to systematically identify and fix SonarQube issues using Claude Code AI integrated with the SonarQube MCP server. Learn how to automate code quality improvements for bugs, vulnerabilities, security hotspots, and code smells."
---

# SonarQube Issue Fixing article with MCP and Claude Code

## Overview

This article demonstrates how to systematically identify and fix SonarQube issues (bugs, vulnerabilities, security hotspots, and code smells) using Claude Code AI integrated with the SonarQube MCP (Model Context Protocol) server.

### What You'll Learn

- Configure SonarQube MCP server in Claude Code
- Identify bugs, vulnerabilities, and security hotspots
- Fix code smells by severity levels
- Automate issue documentation and tracking
- Implement systematic fixing approaches

## Prerequisites

- [Claude Code](https://docs.claude.com/claude-code/overview) installed
- Access to SonarQube instance
- SonarQube authentication token
- Node.js/npm installed (for MCP server)

## Architecture

```
┌─────────────────┐         ┌──────────────────┐         ┌─────────────────┐
│  Claude Code    │ ◄─────► │  SonarQube MCP   │ ◄─────► │  SonarQube      │
│     (AI)        │         │     Server       │         │    Instance     │
└─────────────────┘         └──────────────────┘         └─────────────────┘
        │                                                          │
        │                                                          │
        ▼                                                          ▼
┌─────────────────┐                                     ┌─────────────────┐
│   .mcp.json     │                                     │   Issues DB     │
│  Configuration  │                                     │                 │
└─────────────────┘                                     └─────────────────┘
        │
        ▼
┌─────────────────────────────────────────────────┐
│          Commands                               │
│  • issue-identifier.md                          │
│  • code-smells.md                               │
└─────────────────────────────────────────────────┘
```

## Setup Guide

### Step 1: Configure MCP Server

Use [Sonarqube MCP Server](https://github.com/sapientpants/sonarqube-mcp-server). Create `.mcp.json` in your project root:

```json
{
    "mcpServers": {
        "sonarqubev8": {
            "type": "stdio",
            "command": "npx",
            "args": [
                "-y",
                "sonarqube-mcp-server@latest"
            ],
            "env": {
                "SONARQUBE_URL": "https://your-sonarqube-instance.com",
                "SONARQUBE_TOKEN": "your-sonarqube-token-here"
            },
            "timeout": 60
        }
    }
}
```

**Configuration Parameters:**

| Parameter | Description | Example |
|-----------|-------------|---------|
| `SONARQUBE_URL` | Your SonarQube instance URL | `https://sonarqube.company.com` |
| `SONARQUBE_TOKEN` | Authentication token from SonarQube | Generate from User → My Account → Security |
| `timeout` | Connection timeout in seconds | `60` |

### Step 2: Create Command Prompts Directory in Project Directory

```bash
mkdir -p .claude/commands/sonar
```

### Step 3: Create Issue Identifier Prompt

Create `.claude/commands/sonar/issue-identifier.md`:

```markdown
# SonarQube Issue Identification

Get bugs, vulnerabilities, and security hotspots from sonarqube mcp.

Develop systematic approach for fixing identified issues:

## Total {TYPE} Issue: {TOTAL_ISSUE_COUNT}

Issue: {Sonar Issue Name}
Error Location Code:
## {relative-file-path}:{start-line:end-line}
\`\`\`
1: Code Line 1
2: Code Line 2
...
\`\`\`

Fix Approach: Fix Approach

Save in folder: spec/plan/sonar
Save in different new files based on type:
- Bug: bug-{datemonthhourminutesecond}.md
- Vulnerability: vulnerability-{datemonthhourminutesecond}.md
- Security Hotspot: security-hotspot-{datemonthhourminutesecond}.md
```

### Step 4: Create Code Smells Prompt

Create `.claude/commands/sonar/code-smells.md`:

```markdown
# SonarQube Code Smells Identification

Get code smell from sonarqube mcp.

Develop systematic approach for fixing identified issues:

## Total {SEVERITY} Issue: {TOTAL_ISSUE_COUNT}

Issue: {Sonar Issue Name}
Error Location Code:
## {relative-file-path}:{start-line:end-line}
\`\`\`
1: Code Line 1
2: Code Line 2
...
\`\`\`

Fix Approach: Fix Approach

Save in folder: spec/plan/sonar
Save in different severity new file: smell-{severities}-{datemonthhourminutesecond}.md, ...
```

## Workflow Usage

### Workflow 1: Fixing Bugs, Vulnerabilities, and Security Hotspots

#### Step 1: Identify Issues

```bash
# In Claude Code terminal
/sonar:issue-identifier
Get bugs, vulnerabilities, and security hotspots from sonarqube mcp in {link sonar}.
```

**What happens:**
1. Claude Code connects to SonarQube via MCP
2. Retrieves all bugs, vulnerabilities, and security hotspots
3. Analyzes each issue and proposes fix approach
4. Generates organized reports in `spec/plan/sonar/`

#### Step 2: Review Generated Reports

Generated files structure:
```
spec/plan/sonar/
├── bug-20250108141530.md
├── vulnerability-20250108141545.md
└── security-hotspot-20250108141600.md
```

**Example Bug Report:**
```markdown
## Total Bug Issue: 15

Issue: Null pointer dereference
Error Location Code:
## src/services/user.service.ts:45:52
\`\`\`
45: const userName = user.profile.name;
46: const userEmail = user.profile.email;
47: return { userName, userEmail };
\`\`\`

Fix Approach: Add null check before accessing user.profile
```

#### Step 3: Implement Fixes

For each issue, Claude Code will:
1. Navigate to the file
2. Understand the context
3. Apply the fix
4. Test the changes
5. Verify with SonarQube

**Example Fix Flow:**
```bash
# Claude Code automatically:
1. Opens src/services/user.service.ts
2. Adds null checking:
   if (!user || !user.profile) {
       throw new Error('Invalid user profile');
   }
3. Runs tests
4. Re-scans with SonarQube
5. Verifies issue is resolved
```

### Workflow 2: Fixing Code Smells

#### Step 1: Identify Code Smells

```bash
# In Claude Code terminal
/sonar:sonar-code-smells
Get code smell from sonarqube mcp in {link sonar}.
```

**What happens:**
1. Retrieves code smells from SonarQube
2. Groups by severity (BLOCKER, CRITICAL, MAJOR, MINOR, INFO)
3. Generates severity-based reports

#### Step 2: Review Severity-Based Reports

Generated files structure:
```
spec/plan/sonar/
├── smell-blocker-20250108142000.md
├── smell-critical-20250108142015.md
├── smell-major-20250108142030.md
├── smell-minor-20250108142045.md
└── smell-info-20250108142100.md
```

**Example Code Smell Report:**
```markdown
## Total CRITICAL Issue: 8

Issue: Cognitive Complexity is too high
Error Location Code:
## src/utils/validator.ts:120:180
\`\`\`
120: function validateUserInput(input: any) {
121:   if (input) {
122:     if (input.name) {
123:       if (input.name.length > 0) {
124:         if (input.email) {
125:           // ... deeply nested conditions
\`\`\`

Fix Approach: Refactor using early returns and extract validation logic
```

#### Step 3: Prioritize and Fix

**Recommended Priority Order:**
1. **BLOCKER** - Fix immediately, blocks deployment
2. **CRITICAL** - Fix before next release
3. **MAJOR** - Schedule in current sprint
4. **MINOR** - Plan for upcoming sprints
5. **INFO** - Nice-to-have improvements

## Best Practices

### 1. Issue Prioritization Matrix

| Issue Type | Severity | Priority | Timeline |
|------------|----------|----------|----------|
| Security Hotspot | HIGH | P0 | Immediate |
| Vulnerability | HIGH/CRITICAL | P0 | Immediate |
| Bug | BLOCKER/CRITICAL | P1 | Within 24h |
| Bug | MAJOR/MINOR | P2 | Current Sprint |
| Code Smell | BLOCKER/CRITICAL | P1 | Within 48h |
| Code Smell | MAJOR | P2 | Current Sprint |
| Code Smell | MINOR/INFO | P3 | Backlog |

### 2. Batch Processing

**For Large Codebases:**

```bash
# Process by type
1. Run security issues first:
   - Security Hotspots
   - Vulnerabilities

2. Then bugs:
   - Critical/Blocker bugs
   - Major bugs

3. Finally code smells:
   - By severity level
```

### 3. Documentation Standards

Each generated report should include:
- Total issue count
- Issue name and description
- Exact location (file:line)
- Code context (±5 lines)
- Proposed fix approach
- Related issues (if any)

### 4. Verification Workflow

After implementing fixes:

```bash
# 1. Run local tests

# 2. Lint code (if applicable)

# 3. SonarQube re-scan
# Claude Code will automatically trigger this

# 4. Verify in SonarQube UI
# Check that issue is marked as resolved
```


## Troubleshooting

### Common Issues

**1. MCP Connection Timeout**

```
Error: Connection to SonarQube MCP server timed out
```

**Solution:**
- Increase timeout in `.mcp.json`
- Check network connectivity
- Verify SonarQube URL is accessible

**2. Authentication Failed**

```
Error: 401 Unauthorized
```

**Solution:**
- Regenerate SonarQube token
- Verify token has correct permissions
- Check token expiration

**3. No Issues Found**

```
Total Issue: 0
```

**Possible Causes:**
- Project not scanned recently
- Wrong project key
- Issues already resolved

**Solution:**
```bash
# Trigger SonarQube scan first
```

## Conclusion

This article provides a systematic approach to maintaining code quality using AI-powered automation. By combining Claude Code's intelligence with SonarQube's comprehensive analysis, you can:

- **Reduce technical debt** by 40-60%
- **Fix critical issues** in minutes instead of hours
- **Maintain consistent** code quality standards
- **Scale** quality reviews across large codebases

Start with high-priority issues (security and bugs) and progressively improve code smells. Consistency is key to maintaining high code quality.

