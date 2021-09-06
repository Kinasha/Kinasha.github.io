const fs = require('fs')
function getSidebar(dir) {
    // const files = fs.readdirSync(`${__dirname}/../${dir}`)
    const files = fs.readdirSync(`${__dirname}/../${dir}`)
    console.log(files)
    const sidebar = files.map(file => {
        let fileName = file.split('.')[0]
        if (fileName.toUpperCase() === 'README') {
            return ['', '写在开头']
        } else {
            return fileName
        }
    })
    console.log(sidebar)
    return sidebar
}

module.exports = {
    lang: 'zh-CN',
    title: 'Kinasha 的前端博客',
    description: 'Kinasha 的前端博客',
    themeConfig: {
        // 默认值：false
        displayAllHeaders: true,
        logo: 'https://vuejs.org/images/logo.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: '前端基础', link: '/basics/' },
            { text: 'Github', link: 'https://github.com/Kinasha' },
        ],
        // sidebar: {
        //     '/basics/': getSidebar('basics'),
        //     '/essay/': getSidebar('essay')
        // }
        sidebar: 'auto'
    },
}