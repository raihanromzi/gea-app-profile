# Use a specific version of the bun image for better consistency
FROM oven/bun:1

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package management files
COPY package.json bun.lockb ./

# Install dependencies
RUN bun install

# Copy the rest of your application files
COPY . .

# Build the application
# Ensure the build script in package.json is correctly set up for production
RUN bun run build

# Expose the port the application runs on
EXPOSE 9000

# Command to start your application
# Make sure "start" script in package.json is correctly set up to serve the application
CMD ["bun", "run", "start"]
