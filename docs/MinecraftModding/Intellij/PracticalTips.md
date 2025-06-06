当然有，以下是 **IntelliJ IDEA 在 Minecraft Mod 开发（Forge/NeoForge）中的实用技巧和最佳实践**，涵盖代码导航、调试、构建、代码结构优化等方面，帮助你 **更高效地开发 Mod**。

---

## 🔧 1. 快速跳转与源码导航

### ✅ `Ctrl + B` / `Ctrl + Click`

跳转到类 / 方法 / 字段 定义。
例如：

* `player.level()` → `Ctrl + B` → 跳转到 `Level` 类定义
* `event.getEntity()` → 跳转到 `LivingEvent` 或其子类

### ✅ `Ctrl + Alt + B`

跳转到方法的**具体实现**（即便是接口或抽象方法）。

### ✅ `Ctrl + U`

查看当前类或方法的**父类 / 接口声明**（反向看继承关系）。

### ✅ `Ctrl + Shift + I`

快速查看定义（悬浮预览，无需跳转）。

---

## 📁 2. 项目结构快速访问

### ✅ `Alt + 1`

打开 / 关闭 Project 工程面板。

### ✅ `Double Shift`（双击 Shift）

**全局搜索**类 / 方法 / 文件 / 配置。模糊查找极快。

### ✅ `Ctrl + N`

查找类。输入 `LivingDamageEvent` 即可快速定位。

### ✅ `Ctrl + Shift + N`

查找文件。可定位到 `mods.toml`、`pack.mcmeta` 等。

---

## 🧠 3. Minecraft 专用技巧

### ✅ 自动生成事件处理器

1. 输入 `@SubscribeEvent`，然后用 `Alt+Enter` → `Create method`
2. IntelliJ 会自动生成正确方法签名，如：

   ```java
   @SubscribeEvent
   public static void onPlayerTick(TickEvent.PlayerTickEvent event) {
   }
   ```

### ✅ 快速查找注册表对象

* 你想找 `Items.DIAMOND_SWORD` 是怎么注册的？按住 `Ctrl + B` → 跳转到注册类，甚至能看到原始 `DeferredRegister` 定义。

---

## 🧪 4. 运行与调试

### ✅ 设置 Minecraft 运行配置（第一次自动生成）

* 自动生成配置名通常为 `runClient`、`runServer`
* 按 `Shift + F10` 快速运行客户端
* `Shift + F9` 启动调试器（断点调试）

### ✅ 设置断点（Debug 调试）

* 左侧点击行号设置断点
* `System.out.println()` 可快速排查
* 按 `F8` 单步执行，`F7` 进入方法内部，`F9` 继续执行

---

## 💡 5. 实用代码辅助技巧

### ✅ `Ctrl + P`

查看方法参数类型和顺序。

### ✅ `Ctrl + Shift + Space`

**智能补全**当前上下文中最可能需要的变量。

### ✅ `Ctrl + Alt + V`

快速将方法结果赋值为变量。比如：

```java
level.damageSources().magic() → Alt+Enter → Extract to variable
```

### ✅ `Ctrl + Alt + L`

格式化代码（自动对齐缩进、换行）。

---

## 🧹 6. 项目依赖管理（Forge/NeoForge）

* IDEA 会自动识别 `build.gradle` 中的依赖。
* 如果你添加新依赖或版本更新后没生效，请使用：

  * `View > Tool Windows > Gradle` → 点击刷新按钮
  * 或 `Ctrl+Shift+A` 输入 `Reload Gradle Project`

---

## 🧰 7. 插件推荐（可选）

| 插件名                   | 用途                                                                             |
| --------------------- | ------------------------------------------------------------------------------ |
| Minecraft Development | JetBrains 官方插件，支持 Forge/Fabric/NeoForge 模板创建和代码提示（如 `@Mod`, `@SubscribeEvent`） |
| .ignore               | 自动生成 `.gitignore`                                                              |
| Rainbow Brackets      | 括号高亮，结构清晰                                                                      |
| CodeGlance Pro        | 右侧代码缩略图                                                                        |
| Key Promoter X        | 帮你记住快捷键                                                                        |

---

## 📌 小技巧总结清单：

| 快捷键                          | 作用          |
| ---------------------------- | ----------- |
| `Ctrl + B`                   | 跳转定义        |
| `Ctrl + N` / `Shift + Shift` | 查找类 / 全局搜索  |
| `Ctrl + Alt + V`             | 提取为变量       |
| `Ctrl + Alt + L`             | 格式化代码       |
| `Ctrl + P`                   | 查看参数        |
| `Shift + F10` / `F9`         | 运行 / Debug  |
| `Alt + Enter`                | 快速修复 / 生成代码 |

---

如果你提供你的 Mod 类型（Forge / NeoForge）和日常开发任务，我可以根据你的工作流给你定制更详细的 IntelliJ 快捷流程和插件推荐。是否需要？
