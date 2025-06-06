# Gitignore 参考手册

## 1. 文件概述

`.gitignore` 是 Git 版本控制系统的配置文件，用于指定哪些文件或目录应被 Git 忽略，不纳入版本控制。

### 文件位置
- 项目级：`<项目根目录>/.gitignore`（推荐）
- 全局级：`~/.gitignore_global`（需配置）

## 2. 基本语法

| 语法模式       | 说明                                                                 |
|----------------|----------------------------------------------------------------------|
| `# 注释`       | 以 `#` 开头的行是注释                                               |
| `*.ext`        | 忽略所有扩展名为 `.ext` 的文件                                       |
| `filename`     | 忽略所有名为 `filename` 的文件                                       |
| `dir/`         | 忽略名为 `dir` 的目录及其所有内容                                    |
| `/dir`         | 只忽略项目根目录下的 `dir` 目录                                      |
| `!/file`       | 不忽略指定的文件（例外规则）                                        |
| `**/dir`       | 忽略所有层级中名为 `dir` 的目录                                      |
| `prefix*`      | 忽略所有以 `prefix` 开头的文件                                       |
| `[abc]`        | 匹配字符集合（如 `a`、`b` 或 `c`）                                   |

## 3. 常用忽略模式

### 3.1 开发环境
```
# IDE 和编辑器
.idea/
.vscode/
*.swp
*.swo

# 操作系统文件
.DS_Store
Thumbs.db
Desktop.ini
```

### 3.2 编程语言

#### Python
```
__pycache__/
*.py[cod]
*.so
.Python
env/
venv/
*.egg-info/
```

#### JavaScript/Node.js
```
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*
```

#### Java
```
*.class
*.jar
*.war
*.ear
target/
```

### 3.3 构建系统
```
# Gradle
.gradle/
build/

# Maven
target/
*.jar
*.war
*.ear
```

## 4. 高级功能

### 4.1 全局忽略配置
```bash
# 创建全局忽略文件
touch ~/.gitignore_global

# 配置 Git 使用全局忽略文件
git config --global core.excludesfile ~/.gitignore_global
```

### 4.2 检查忽略规则
```bash
# 检查文件为何被忽略
git check-ignore -v path/to/file

# 显示所有被忽略的文件
git status --ignored
```

### 4.3 强制添加被忽略的文件
```bash
git add -f ignored_file
```

## 5. 最佳实践

1. **尽早设置**：在项目初始化时就创建 `.gitignore` 文件
2. **团队共享**：将 `.gitignore` 文件纳入版本控制
3. **分层管理**：
   - 通用规则放在项目根目录的 `.gitignore` 中
   - 特定规则放在子目录的 `.gitignore` 中
4. **使用模板**：参考 GitHub 的 gitignore 模板库
5. **定期审查**：随着项目发展更新忽略规则

## 6. 常见问题解决

### Q1: 已经提交的文件如何忽略？
```bash
git rm --cached <file>  # 从 Git 中删除但保留本地文件
echo "<file>" >> .gitignore
git add .gitignore
git commit -m "Ignore <file>"
```

### Q2: 忽略规则不生效？
1. 检查规则语法是否正确
2. 确保文件未被 Git 跟踪（使用 `git ls-files` 检查）
3. 清除 Git 缓存：`git rm -r --cached .`

### Q3: 如何忽略特定扩展名但保留某些文件？
```
*.log
!important.log
```

## 附录：Gitignore 模板资源

1. [GitHub 官方模板库](https://github.com/github/gitignore)
2. [gitignore.io](https://www.toptal.com/developers/gitignore) - 按技术生成模板

---

这份参考手册可作为日常开发的快速查阅指南。根据项目需求，可适当调整和扩展内容。