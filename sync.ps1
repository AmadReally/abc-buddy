param(
  [string]$Message = ""
)

$ErrorActionPreference = "Stop"

if (-not (Test-Path ".git")) {
  throw "This folder is not a Git repository."
}

$trackedMyney = git ls-files .myney.core
if ($trackedMyney) {
  throw ".myney.core is tracked by Git. Remove it before syncing."
}

$status = git status --porcelain
if (-not $status) {
  Write-Host "No changes to sync."
  exit 0
}

if (-not $Message) {
  $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm"
  $Message = "chore: sync updates $timestamp"
}

git add -A
git commit -m $Message
git push

