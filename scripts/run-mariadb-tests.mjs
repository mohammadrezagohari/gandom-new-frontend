import { spawn } from "node:child_process"

const child = spawn(
  process.execPath,
  ["--test", "--test-concurrency=1", "tests/database.integration.test.mjs"],
  {
    stdio: "inherit",
    env: {
      ...process.env,
      TEST_DATABASE_URL:
        process.env.TEST_DATABASE_URL ||
        "mysql://gandom_test:test_password@127.0.0.1:33307/gandom_test",
    },
  },
)

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal)
    return
  }
  process.exitCode = code ?? 1
})
