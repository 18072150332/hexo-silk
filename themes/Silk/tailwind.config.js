/*
 * @Author: zhangfu 18072150332@163.com
 * @Date: 2025-07-03 23:38:37
 * @LastEditors: zhangfu 18072150332@163.com
 * @LastEditTime: 2025-10-26 09:00:37
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layout/**/*.{html,ejs,js,md}",
    "./source/**/*.{html,css,js}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2C5F2D',
        secondary: '#2C5F2D',
        dark: '#1E293B',
        light: '#F8FAFC'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}