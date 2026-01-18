#!/bin/bash
# =============================================================================
# Deploy Legacy Site to Hostinger via SSH/RSYNC
# =============================================================================

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Load environment variables
if [ -f .env ]; then
    export $(cat .env | grep -v '^#' | xargs)
else
    echo -e "${RED}Error: .env file not found${NC}"
    exit 1
fi

echo -e "${GREEN}🚀 Deploying Legacy Site to Hostinger...${NC}"

# Validate required variables
if [ -z "$UPLOAD_HOST" ] || [ -z "$UPLOAD_USER" ] || [ -z "$UPLOAD_DIR" ]; then
    echo -e "${RED}Error: Missing required environment variables${NC}"
    echo "Required: UPLOAD_HOST, UPLOAD_USER, UPLOAD_DIR"
    exit 1
fi

# Create temporary directory for legacy files
TEMP_DIR=$(mktemp -d)
echo -e "${YELLOW}📦 Preparing files...${NC}"

# Copy legacy site to temp
cp -r . "$TEMP_DIR/"
cd "$TEMP_DIR"

# Remove files that shouldn't be deployed
rm -rf .git .env scripts .gitignore README.md ARQUITECTURA.md .DS_Store

echo -e "${YELLOW}📤 Uploading to Hostinger...${NC}"

# Deploy via rsync
sshpass -p "$UPLOAD_PASS" rsync -avz \
    --progress \
    --delete \
    -e "ssh -p $UPLOAD_PORT -o StrictHostKeyChecking=no" \
    ./ "$UPLOAD_USER@$UPLOAD_HOST:$UPLOAD_DIR/"

# Cleanup
cd -
rm -rf "$TEMP_DIR"

echo -e "${GREEN}✅ Deployment completed successfully!${NC}"
echo -e "${GREEN}🌐 Site available at: https://$DOMAIN${NC}"
