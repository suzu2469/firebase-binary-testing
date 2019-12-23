import * as functions from 'firebase-functions';
import * as exec from 'child_process'
import * as path from 'path'

const execFilePath = path.resolve(__dirname, '../bin/linux')

export const helloWorld = functions.https.onRequest((request, response) => {
    // fs.chmodSync(execFilePath, 0o755)
    const result = exec.execSync(execFilePath).toString()
    console.log(`result: ${result}`)
    response.send(result)
})

