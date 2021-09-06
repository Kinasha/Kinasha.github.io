const fs = require('fs')
function getSidebar(dir) {
    // const files = fs.readdirSync(`${__dirname}/../${dir}`)
    const files = fs.readdirSync(`${__dirname}/../${dir}`)
    const sidebar = files.map(file => {
        let fileName = file.split('.')[0]
        if (fileName.toUpperCase() === 'README') {
            return ''
        } else {
            return fileName
        }
    })
    return sidebar
}
/**
 * @description: 获取当前目录下md文件的名称
 * @param {*} dir 当前目录的名称 要取得文件类型
 * @return {*} 名称数组
 */
function getSubFiles(currentDir, fileType = 'md') {
    const files = fs.readdirSync(`${__dirname}/../${currentDir}`)
    return files.map(f => f.split('.')[1] === fileType && f.split('.')[0])
        .map(e => e !== 'README' ? e.toUpperCase() : null)
}
/**
 * @description: 构建需要子对象 用来作下拉
 * @param {*} currentDir
 * @return {*}
 */
function buildSubItems(currentDir) {
    const subFiles = getSubFiles(currentDir)
    return subFiles.map(f => { return { text: f, link: `/${currentDir}/${f}` } })
}
module.exports = {
    lang: 'zh-CN',
    title: 'Kinasha 的前端博客',
    description: 'Kinasha 的前端博客',
    themeConfig: {
        base: '/',
        displayAllHeaders: true,
        logo: 'https://vuejs.org/images/logo.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: '前端基础', items: buildSubItems('basics') },
            { text: 'Github', link: 'https://github.com/Kinasha' },
        ],
        // sidebar: {
        //     '/basics/': getSidebar('basics'),
        //     '/essay/': getSidebar('essay')
        // }
        sidebar: 'auto'
    },
}