# push.ps1 — helper to commit and push changes
# Usage: run this from the project root after installing Git

param(
  [string]$Branch = "main",
  [string]$Message = "Fix Vercel build: update config and entry point"
)

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
  Write-Error "Git is not installed or not on PATH. Install Git and re-run this script."
  exit 1
}

Write-Host "Checking git status..."
git status --porcelain

Write-Host "Staging all changes..."
git add -A

Write-Host "Committing..."
# Only commit if there are staged changes
$changes = git diff --cached --name-only
if (-not $changes) {
  Write-Host "No changes staged for commit. Skipping commit."
} else {
  git commit -m $Message
}

Write-Host "Pushing to origin/$Branch..."
# If upstream not set, set it
$branchExists = git rev-parse --abbrev-ref HEAD
if ($branchExists -ne $Branch) {
  Write-Host "Current branch is '$branchExists' — switching to '$Branch' (will create if missing)."
  git checkout -B $Branch
}

git push -u origin $Branch

Write-Host "Done. If push failed, check authentication or remote settings."