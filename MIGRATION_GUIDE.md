# 迁移到 `Thanksyy/thanksyy.github.io` + GitHub Pages 部署指南

本指南帮你把新版个人主页（Vite + React 项目）发布到你**现有的仓库** `Thanksyy/thanksyy.github.io`，并通过 GitHub Actions 实现「推送即自动构建上线」，同时**保留你的自定义域名 `luoyuyu.vip`**。

---

## 一、先理解关键差异（很重要）

| | 旧主页 | 新主页 |
|---|---|---|
| 类型 | Jekyll 静态站点（源码即成品） | Vite + React 项目（**源码需要 build 才能变成网页**） |
| 上线方式 | GitHub Pages 直接渲染 master 分支 | GitHub Actions 构建后，发布到 Pages |

因此**不能**像旧站那样把源码丢进仓库就能显示。解决办法是仓库里已经准备好的 GitHub Actions 工作流：你推送源码到 `master`，Actions 自动 `pnpm build` 并把产物部署到 Pages。

> 旧主页的所有内容仍然保存在 Git 历史里，随时可以回滚，迁移不会丢失任何东西。

---

## 二、迁移前的准备

新项目已经为你配置好以下文件（无需你改动）：

- `.github/workflows/deploy.yml` — 自动构建并部署到 GitHub Pages 的工作流
- `vite.config.ts` — 已设 `base: "./"`，资源用相对路径，兼容自定义域名
- `CNAME` — 内容为 `luoyuyu.vip`，部署时自动写入产物，**保住你的域名**
- `client/public/assets/` — 头像、hero 背景、招生 PDF 已本地化（不再依赖外部临时链接）
- `scripts/postbuild-pages.mjs` — 构建后自动清理无关注入，产物干净

---

## 三、推荐迁移方案：用一个全新分支替换，保留历史

下面命令把新主页源码放到 `master` 分支，同时**把旧 Jekyll 内容归档到一个备份分支**，安全可回退。

### 第 1 步：拿到新项目代码

从 Manus 管理界面 **More 菜单（⋯）→ Download as ZIP** 下载本项目，解压到本地，例如 `~/yuyu-homepage/`。

### 第 2 步：备份旧主页（强烈建议）

```bash
# 克隆你现有的仓库
git clone https://github.com/Thanksyy/thanksyy.github.io.git
cd thanksyy.github.io

# 把当前（旧 Jekyll）内容备份到一个分支，以防万一
git checkout -b legacy-jekyll-backup
git push origin legacy-jekyll-backup

# 回到主分支
git checkout master
```

### 第 3 步：用新主页内容替换 master 的工作区

```bash
# 删除旧的工作区文件（保留 .git 历史）
git rm -rf .

# 把解压后的新项目文件复制进来（注意把隐藏文件 .github / .gitignore 一起复制）
cp -r ~/yuyu-homepage/. .

# 确认 CNAME 还在且内容正确（应为 luoyuyu.vip）
cat CNAME
```

### 第 4 步：提交并推送

```bash
git add .
git commit -m "feat: migrate to new Vite+React academic homepage"
git push origin master
```

---

## 四、在 GitHub 上启用 Pages（只需做一次）

1. 打开仓库 **Settings → Pages**。
2. 在 **Build and deployment → Source** 选择 **GitHub Actions**（不要选 “Deploy from a branch”）。
3. 保存。

推送后，进入仓库 **Actions** 标签页，可以看到 `Deploy to GitHub Pages` 工作流在运行。约 1–2 分钟完成后，站点即上线。

---

## 五、自定义域名 `luoyuyu.vip`

- 仓库里的 `CNAME` 文件会在每次部署时自动写入产物，域名绑定保持不变，**通常无需额外操作**。
- 如果 Settings → Pages 里的 Custom domain 显示为空，手动填入 `luoyuyu.vip` 并保存即可。
- 你的 DNS 解析（域名服务商处）保持原样，无需改动（仍指向 GitHub Pages）。

---

## 六、日常维护：如何更新主页内容

所有内容都集中在数据文件里，**改完推送即可，Actions 自动重新部署**：

| 想更新什么 | 改这个文件 |
|---|---|
| 新增 / 修改论文（含标签） | `client/src/data/publications.ts` |
| 个人简介、邮箱、链接、招生信息 | `client/src/data/profile.ts` |
| 开源项目卡片 | `client/src/data/projects.ts` |
| 奖项、学生、学术服务 | `client/src/data/misc.ts` |

### 新增一篇论文的例子

打开 `client/src/data/publications.ts`，复制一条已有记录，改成你的新论文即可：

```ts
{
  title: "Your New Paper Title",
  authors: ["Author A", "Yuyu Luo"],   // 你的名字会自动加粗
  venue: "SIGMOD 2026",
  year: 2026,
  tags: ["Text-to-SQL", "AI for DB"],  // 标签会自动出现在筛选栏
  links: { pdf: "https://...", code: "https://..." },
},
```

保存后：

```bash
git add client/src/data/publications.ts
git commit -m "docs: add new SIGMOD 2026 paper"
git push origin master
```

约 1–2 分钟后线上自动更新，无需手动 build。

### 本地预览（可选）

```bash
pnpm install
pnpm dev        # 本地开发预览
pnpm build:pages  # 本地生成与线上一致的产物到 dist/public
```

---

## 七、回滚

如果新主页出现问题，想暂时退回旧 Jekyll 版本：

```bash
git checkout master
git reset --hard legacy-jekyll-backup
git push -f origin master
```

（同时记得把 Settings → Pages 的 Source 改回 “Deploy from a branch”。）

---

如对任何一步不确定，把当时的报错或 Actions 日志发给我，我来帮你排查。
