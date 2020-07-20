function setup() {
    noCanvas()
    frameRate
}

function draw() {
    const values = []
    for (let i = 0; i < 150000; i++) {
        values[i] = random(0, 100)
    }
    const shape = [500, 300]

    const test = tf.tensor2d(values, shape)

    tf.tidy(() => {
        test.dispose()

        const a = tf.tensor2d(values, shape, 'int32')
        const b = tf.tensor2d(values, shape, 'int32')
        const b_t = b.transpose()

        const c = a.matMul(b_t)
    })



    console.log(tf.memory().numTensors)
}