# 个人主页维护与部署指南

本主页基于 **React + Vite + Tailwind** 构建，所有内容都集中在少数几个数据文件里，**改数据文件即可更新页面，无需改动任何页面代码**。

---

## 一、日常维护：在哪里改内容

所有内容数据都在 `client/src/data/` 目录下：

| 文件 | 控制的内容 |
|---|---|
| `profile.ts` | 姓名、职称、单位、邮箱、办公室、社交链接、Hero 统计卡、研究方向、中英文简介、招生说明 |
| `publications.ts` | 全部论文（标题、作者、会议、年份、链接、标签） |
| `projects.ts` | 重点开源项目卡片、合作企业名单 |
| `misc.ts` | 奖项、博士生名单、学术服务 |

### 1. 新增一篇论文（最常用）

打开 `client/src/data/publications.ts`，在 `PUBLICATIONS` 数组**最前面**（最新的放最上）复制粘贴一条记录：

```ts
{
  year: 2026,
  venue: "SIGMOD 2026",            // 会议徽章
  title: "你的论文标题",
  authors: "Author A, **Yuyu Luo**, *Student Name*",  // **加粗自己**，*下划线学生*
  note: "Best Paper",              // 可选：额外说明，没有就删掉这一行
  links: [
    { label: "PDF", url: "https://..." },
    { label: "Code", url: "https://..." },
  ],
  tags: ["Text-to-SQL", "AI for DB"],  // 标签，会自动出现在筛选栏
},
```

- **作者标记**：`**名字**` 会高亮加粗（用于你自己），`*名字*` 会加虚线下划线（用于学生）。
- **标签**：随便写，新标签会自动出现在筛选按钮里，无需另外注册。
- **链接类型**：`PDF / Code / Data / Slides / Homepage / Video / Leaderboard / Handbook` 会自动匹配对应图标，其他文字也能正常显示。

### 2. 修改简介 / 统计数字 / 联系方式

打开 `client/src/data/profile.ts`，找到对应字段直接改即可（如 `STATS` 控制 Hero 三张统计卡）。

### 3. 新增奖项 / 学生 / 服务

打开 `client/src/data/misc.ts`，在对应数组里加一条记录。

---

## 二、本地预览（可选）

```bash
pnpm install      # 首次
pnpm dev          # 启动本地预览 http://localhost:3000
```

---

## 三、部署到 GitHub Pages

本主页有两种托管方式，**推荐方式 A（Manus 一键发布）最省心**；如果你坚持用 GitHub Pages，用方式 B。

### 方式 A：Manus 内置托管（推荐）
在右侧管理界面点击 **Publish** 按钮即可上线（需先创建检查点）。支持绑定自定义域名 `luoyuyu.vip`，推送即更新，无需配置。

### 方式 B：GitHub Pages

1. 在管理界面用 **Settings → GitHub** 把代码导出到你的新仓库（例如 `luoyuyu/homepage`）。
2. 因为是 Vite 项目，需要构建后部署。在仓库中添加 GitHub Actions 工作流 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v4
        with: { version: 10 }
      - uses: actions/setup-node@v4
        with: { node-version: 22, cache: pnpm }
      - run: pnpm install --frozen-lockfile
      - run: pnpm build
      - uses: actions/upload-pages-artifact@v3
        with: { path: dist/public }
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment: { name: github-pages }
    steps:
      - uses: actions/deploy-pages@v4
```

3. 在仓库 **Settings → Pages** 中，Source 选择 **GitHub Actions**。
4. 绑定自定义域名 `luoyuyu.vip`：在仓库 Settings → Pages → Custom domain 填入域名，并在域名服务商处把 DNS 指向 GitHub Pages。

> 注意：方式 B 下，本项目用到的图片/PDF 等静态资源目前托管在 Manus 存储（`/manus-storage/...` 与 CDN 链接）。迁移到纯 GitHub Pages 时，建议把这些资源下载到仓库的 `public/` 目录并改成相对路径，以保证长期可用。如果用方式 A（Manus 托管），则无需处理。

---

## 四、改完之后怎么更新线上

- **Manus 托管**：保存检查点 → 点 Publish。
- **GitHub Pages**：`git commit` 后 `git push`，GitHub Actions 会自动构建并发布。

有任何想新增的板块（如 Talks、News 动态、CV 下载、Teaching 等），把内容发我即可。
