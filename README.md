# Kyaung Yee Bann KYBY Factory Website

这是一个轻量静态官网，不需要后端和数据库。当前内容以缅甸语为主，英文为辅，适合先用于业务展示；之后购买域名后，可以直接部署到 Netlify、Vercel、Cloudflare Pages 或普通虚拟主机。

## 打开网站

直接双击 `index.html` 即可在浏览器预览。

如果要本地启动服务，可以在本目录运行：

```bash
python3 -m http.server 8080
```

然后打开：

```text
http://localhost:8080
```

## 修改联系电话、地址

编辑：

```text
assets/site-data.js
```

找到 `contact` 区域，修改 `phoneDisplay`、`phoneHref`、`viberDisplay`、`viberHref`、`address` 和 `mapHref`。

## 新增产品

1. 把新产品图片放到：

```text
assets/images/
```

2. 打开：

```text
assets/site-data.js
```

3. 在 `products` 数组里复制一个现有产品对象，修改名称、图片、口感、配料等内容。

产品对象示例：

```js
{
  nameMy: "新口味缅甸语名称",
  nameEn: "New Taste",
  image: "assets/images/new-product.jpg",
  alcohol: "3% Vol",
  bottle: "680ml / ဘူး",
  carton: "14 ဘူး / ပုံး",
  tasteMy: "缅甸语口感描述。",
  tasteEn: "English taste description.",
  ingredientsMy: "缅甸语配料",
  ingredientsEn: "English ingredients",
  accent: "classic"
}
```

`accent` 可以使用 `classic` 或 `lychee`，用于顶部强调色。需要更多颜色时，可以在 `assets/styles.css` 里新增对应样式。

## 替换工厂照片

把新照片放入 `assets/images/` 后，在 `assets/site-data.js` 的 `gallery` 数组里修改 `image`、`titleMy`、`titleEn`。
