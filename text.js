const text = require('fs').readFileSync('text.txt', 'utf8').replace('1:', '').split(/\n\d+:/g).map((d, i) => d.slice(1).replace('\n', '<br>'))
const placeholder = require('fs').readFileSync('text.html', 'utf8')
const index = placeholder.replace(/{{ \d+ }}/g, m => (text[m.slice(3, -3) - 1] || m.slice(3, -3)).replace(/\n/g, '<br>'))
require('fs').writeFileSync('index.html', index, 'utf8')

const cmd = str => require('child_process').execSync(str)
cmd('convert jp/1.jpg -quality 80 -resize 3000x1500 images/gallery/1.jpg')
cmd('convert jp/2.jpg -quality 80 -resize 3000x1500 images/gallery/2.jpg')
cmd('convert jp/3.jpg -quality 80 -resize 820x1000 images/gallery/3.jpg')
cmd('convert jp/4.jpg -quality 80 -resize 820x1000 images/gallery/4.jpg')
cmd('convert jp/5.jpg -quality 80 -resize 820x1000 images/gallery/5.jpg')
cmd('convert jp/6.jpg -quality 80 -resize 740x620 images/gallery/6.jpg')
cmd('convert jp/7.jpg -quality 80 -resize 740x620 images/gallery/7.jpg')
cmd('convert jp/8.jpg -quality 80 -resize 740x620 images/gallery/8.jpg')
cmd('convert jp/9.jpg -quality 80 -resize 740x620 images/gallery/9.jpg')
cmd('convert jp/10.jpg -quality 80 -resize 740x620 images/gallery/10.jpg')
cmd('convert jp/11.jpg -quality 80 -resize 740x620 images/gallery/11.jpg')
// cmd('convert jp/12.jpg -quality 80 -resize 770x580 images/gallery/12.jpg')
// cmd('convert jp/13.jpg -quality 80 -resize 770x580 images/gallery/13.jpg')
// cmd('convert jp/14.jpg -quality 80 -resize 760x640 images/gallery/14.jpg')
cmd('convert jp/12.jpg -quality 80 -resize 232x232 images/gallery/12.jpg')
cmd('convert jp/13.jpg -quality 80 -resize 232x232 images/gallery/13.jpg')
cmd('convert jp/14.jpg -quality 80 -resize 420x230 images/gallery/14.jpg')
cmd('convert jp/15.jpg -quality 80 -resize 420x230 images/gallery/15.jpg')
cmd('convert jp/16.jpg -quality 80 -resize 420x230 images/gallery/16.jpg')
cmd('convert jp/17.jpg -quality 80 -resize 420x230 images/gallery/17.jpg')
cmd('convert jp/18.jpg -quality 80 -resize 420x230 images/gallery/18.jpg')

// curl "https://via.placeholder.com/3000x1500.jpg?text=1" > 1.jpg
// curl "https://via.placeholder.com/3000x1500.jpg?text=2" > 2.jpg
// curl "https://via.placeholder.com/820x1000.jpg?text=3" > 3.jpg
// curl "https://via.placeholder.com/820x1000.jpg?text=4" > 4.jpg
// curl "https://via.placeholder.com/820x1000.jpg?text=5" > 5.jpg
// curl "https://via.placeholder.com/740x620.jpg?text=6" > 6.jpg
// curl "https://via.placeholder.com/740x620.jpg?text=7" > 7.jpg
// curl "https://via.placeholder.com/740x620.jpg?text=8" > 8.jpg
// curl "https://via.placeholder.com/740x620.jpg?text=9" > 9.jpg
// curl "https://via.placeholder.com/740x620.jpg?text=10" > 10.jpg
// curl "https://via.placeholder.com/740x620.jpg?text=11" > 11.jpg
// curl "https://via.placeholder.com/232x232.jpg?text=12" > 12.jpg
// curl "https://via.placeholder.com/232x232.jpg?text=13" > 13.jpg
// curl "https://via.placeholder.com/420x230.jpg?text=14" > 14.jpg
// curl "https://via.placeholder.com/420x230.jpg?text=15" > 15.jpg
// curl "https://via.placeholder.com/420x230.jpg?text=16" > 16.jpg
// curl "https://via.placeholder.com/420x230.jpg?text=17" > 17.jpg
// curl "https://via.placeholder.com/420x230.jpg?text=18" > 18.jpg
