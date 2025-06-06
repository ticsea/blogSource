# 常见问题
Q: repository has different history/仓库有不同提交历史
A: git pull origin/main main --allow-unrelated-histories


Q: global config git/配置
A: git config --global user.name
A: git config --global user.email

Q: rename a branch/重命名分支
A: git branch -m old_branch_name new_branch_name

---

# Git常用命令
添加文件到暂存区:
git add 文件名/.(全部文件)

提交代码到本地仓库:  
git commit -m "提交说明"

添加远程仓库:
    git remote add origin https://github.com/username/repository.git

推送代码到远程仓库并设置上游:
git push -u origin main


---

查看远程仓库:
git remote -v   

追踪远程仓库的main分支:
git branch --set-upstream-to=origin/main main  

将本地main分支推送到远程origin的main分支:
git push origin main 

将所有分支推送到远程仓库:
git push origin --all

查看分支:
git branch  # 查看本地分支
git branch -r  # 查看远程分支

创建分支:  
git branch 分支名  # 创建本地分支
git checkout -b 分支名  # 创建本地分支并切换到该分支

合并分支:  
git merge 分支名  # 将分支名分支合并到当前分支

删除分支:  
git branch -d 分支名  # 删除本地分支
git push origin --delete 分支名  # 删除远程分支 

---
![Quick Coomands Reference](/img/git/quick_commands_reference.jpg)