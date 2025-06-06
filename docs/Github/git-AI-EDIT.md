以下是 Git 常用命令的严谨整理，按功能分类并附规范说明：

---

### **一、仓库初始化与配置**
1. **初始化仓库**  
   ```bash
   git init
   ```
   - 在当前目录创建新的 Git 仓库。

2. **克隆远程仓库**  
   ```bash
   git clone <远程仓库URL> [本地目录名]
   ```
   - 默认克隆主分支，可选指定本地目录名。

3. **全局配置用户信息**  
   ```bash
   git config --global user.name "用户名"
   git config --global user.email "邮箱"
   ```
   - 提交记录会关联此身份信息。

---

### **二、文件状态与提交**
1. **查看工作区与暂存区状态**  
   ```bash
   git status
   ```
   - 显示未跟踪、已修改或已暂存的文件。

2. **添加文件到暂存区**  
   ```bash
   git add <文件名>        # 添加特定文件
   git add .              # 添加所有修改（不含未跟踪文件）
   git add -A             # 添加所有修改（含未跟踪文件）
   ```

3. **提交到本地仓库**  
   ```bash
   git commit -m "提交说明"
   ```
   - 提交暂存区的更改，要求说明清晰且简洁。

4. **跳过暂存区直接提交**  
   ```bash
   git commit -am "提交说明"
   ```
   - 仅对已跟踪文件有效（相当于 `git add` + `git commit`）。

---

### **三、分支管理**
1. **查看分支**  
   ```bash
   git branch              # 查看本地分支（* 表示当前分支）
   git branch -a           # 查看所有分支（含远程）
   ```

2. **创建/切换分支**  
   ```bash
   git branch <分支名>      # 创建分支
   git checkout <分支名>    # 切换分支
   git switch <分支名>      # Git 2.23+ 推荐替代 checkout
   ```

3. **合并分支**  
   ```bash
   git merge <分支名>       # 将指定分支合并到当前分支
   ```
   - 若存在冲突需手动解决后 `git add` 标记。

4. **删除分支**  
   ```bash
   git branch -d <分支名>   # 安全删除（已合并）
   git branch -D <分支名>   # 强制删除（未合并）
   ```

---

### **四、远程仓库操作**
1. **关联远程仓库**  
   ```bash
   git remote add origin <远程仓库URL>
   ```
   - `origin` 为默认远程仓库别名。

2. **推送本地提交**  
   ```bash
   git push -u origin <分支名>  # 首次推送需 -u 关联
   git push                     # 后续推送简写
   ```

3. **拉取远程更新**  
   ```bash
   git pull origin <分支名>     # 拉取并合并（= fetch + merge）
   git fetch origin            # 仅获取远程更新不合并
   ```

4. **查看远程仓库**  
   ```bash
   git remote -v              # 显示远程仓库URL
   ```

---

### **五、撤销与回退**
1. **撤销工作区修改**  
   ```bash
   git restore <文件名>       # 撤销未暂存的修改（Git 2.23+）
   git checkout -- <文件名>   # 传统方式（等效）
   ```

2. **撤销暂存区文件**  
   ```bash
   git restore --staged <文件名>  # 移出暂存区（保留修改）
   git reset HEAD <文件名>        # 传统方式（等效）
   ```

3. **回退到历史提交**  
   ```bash
   git reset --hard <commit哈希>  # 彻底回退（慎用）
   git revert <commit哈希>        # 生成反向提交（安全）
   ```

---

### **六、日志与差异**
1. **查看提交历史**  
   ```bash
   git log --oneline          # 简洁单行显示
   git log --graph            # 图形化分支拓扑
   ```

2. **查看文件差异**  
   ```bash
   git diff                   # 工作区与暂存区差异
   git diff --cached          # 暂存区与最新提交差异
   ```

---

### **七、其他实用命令**
1. **储藏临时修改**  
   ```bash
   git stash                  # 保存当前工作现场
   git stash pop              # 恢复最近储藏
   ```

2. **标签管理**  
   ```bash
   git tag -a v1.0 -m "版本说明"  # 创建附注标签
   git push origin --tags         # 推送所有标签
   ```

---

### **注意事项**
- **强制推送风险**：`git push -f` 会覆盖远程历史，仅限私有分支使用。
- **提交规范**：建议遵循 [Conventional Commits](https://www.conventionalcommits.org/)。
- **SSH 配置**：推荐使用 SSH 密钥认证（需提前配置 `~/.ssh/config`）。

以上命令为 Git 核心操作，需结合具体工作流（如 Git Flow）灵活应用。