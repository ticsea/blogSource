# MinecraftModding
# Setups for Minecraft Modding in IntelliJ/初始化
1. 设置Project JDK。
2. 设置Gradle JVM。
3. File设置映射 [parchment] [1]
   - 在setting.gradle#repositories:
        > ```maven { url = 'https://maven.parchmentmc.org' }```
   - 在build.gradle#plugins:
        > ```id 'org.parchmentmc.librarian.forgegradle' version '1.+'```
   - 在gradle.properties填上对于的版本。

# 添加MOD依赖
0. 添加CurseForgemod依赖 [官网指导] [2]
0. 添加Modrinthmod依赖 [官网指导] [4]
1. 在build.gradle

0. ```curse.maven:<descriptor>-<projectid>:<fileids>```
0. ```maven.modrinth:<modname>:<version>```


# 添加mixin
0. 设置mixin [wiki指导] [3]
1. 在build.gradle#plugins:
   > ```id 'org.spongepowered.mixin' version '0.7.+'```


[1]: <https://parchmentmc.org/docs/getting-started "Parchment - Getting Started">
[2]: <https://cursemaven.com/ '跳转官网'>
[3]: <https://github.com/SpongePowered/Mixin/wiki/Mixins-on-Minecraft-Forge '跳转官网'>
[4]: <https://support.modrinth.com/en/articles/8801191-modrinth-maven '跳转官网'>