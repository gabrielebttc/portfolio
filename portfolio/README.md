

per lanciare il locale:
npm run dev

per lanciare con docker:

# Build
docker build -t portfolio-app .

# Run (in background sulla porta 3000)

docker run -d \
  --name portfolio-site \
  --restart always \
  -p 3000:3000 \
  portfolio-app