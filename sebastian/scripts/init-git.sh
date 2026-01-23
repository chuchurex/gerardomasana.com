#!/bin/bash
# =============================================================================
# Initialize Git Repository and Push to GitHub
# =============================================================================

set -e

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${GREEN}🔧 Initializing Git Repository...${NC}"

# Initialize git if not already done
if [ ! -d .git ]; then
    git init
    echo -e "${GREEN}✅ Git initialized${NC}"
else
    echo -e "${YELLOW}⚠️  Git already initialized${NC}"
fi

# Add all files
git add .

# Create initial commit
if ! git rev-parse HEAD > /dev/null 2>&1; then
    git commit -m "Initial commit: Legacy site (2004-2010) + Modern architecture setup

- Legacy HTML/CSS site preserved
- Environment configuration ready
- Architecture documentation
- Deploy scripts
- Ready for Phase 1: Cloudflare Pages deployment"
    echo -e "${GREEN}✅ Initial commit created${NC}"
else
    echo -e "${YELLOW}⚠️  Repository already has commits${NC}"
fi

# Add remote if not exists
if ! git remote | grep -q origin; then
    git remote add origin https://github.com/chuchurex/gerardomasana.com.git
    echo -e "${GREEN}✅ Remote 'origin' added${NC}"
else
    echo -e "${YELLOW}⚠️  Remote 'origin' already exists${NC}"
fi

# Set main branch
git branch -M main

echo -e "${GREEN}✅ Git setup complete!${NC}"
echo -e "${YELLOW}📝 Next steps:${NC}"
echo "1. git push -u origin main"
echo "2. Configure Cloudflare Pages with this repository"
echo "3. Point DNS to Cloudflare Pages"
