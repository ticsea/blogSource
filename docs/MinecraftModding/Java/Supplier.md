在 Java 中，**`Supplier<T>`** 是 Java 8 引入的一个**函数式接口（Functional Interface）**，属于 `java.util.function` 包。它的核心作用是**提供一个值（无输入，有输出）**，常用于延迟计算、生成对象或数据。以下是详细解析：

---

### **一、`Supplier<T>` 的定义**
```java
@FunctionalInterface
public interface Supplier<T> {
    T get(); // 无参数，返回一个泛型类型的值
}
```

---

### **二、核心特性**
1. **无参数，有返回值**  
   与 `Consumer<T>`（有输入无输出）和 `Function<T, R>`（有输入有输出）不同，`Supplier` 不接收参数，只负责生成值。

2. **延迟计算（Lazy Evaluation）**  
   `get()` 方法在实际调用时才执行逻辑，避免不必要的计算。

3. **支持 Lambda 表达式与方法引用**  
   简化代码，提升可读性。

---

### **三、常见使用场景**
#### 1. **生成值或对象**
```java
// 生成随机数
Supplier<Double> randomSupplier = () -> Math.random();
System.out.println(randomSupplier.get()); // 输出：0.123...

// 创建新对象
Supplier<List<String>> listSupplier = ArrayList::new;
List<String> list = listSupplier.get(); // 等价于 new ArrayList<>()
```

#### 2. **配合 Optional 避免空指针**
```java
Optional<String> optional = Optional.empty();
String value = optional.orElseGet(() -> "Default Value"); // 使用 Supplier 延迟提供默认值
```

#### 3. **工厂模式**
```java
public class ObjectFactory {
    public static <T> T create(Supplier<T> supplier) {
        return supplier.get();
    }
}

// 使用
User user = ObjectFactory.create(User::new);
```

#### 4. **无限流（Stream API）**
```java
// 生成无限随机数流
Stream.generate(() -> Math.random())
      .limit(5)
      .forEach(System.out::println);
```

---

### **四、与其他接口的对比**
| **接口名**       | **方法签名**       | **用途**                     | **示例**                          |
|------------------|--------------------|-----------------------------|-----------------------------------|
| `Supplier<T>`    | `T get()`          | 无输入，生成值               | `() -> "Hello"`                  |
| `Consumer<T>`    | `void accept(T t)` | 消费输入，无输出             | `s -> System.out.println(s)`     |
| `Function<T, R>` | `R apply(T t)`     | 接收输入，返回输出           | `s -> s.length()`                |
| `Callable<T>`    | `T call()`         | 类似 Supplier，但可抛异常   | 多用于多线程和 `ExecutorService` |

---

### **五、高级用法**
#### 1. **组合使用（链式调用）**
```java
Supplier<Integer> baseSupplier = () -> 10;
Supplier<Integer> doubledSupplier = () -> baseSupplier.get() * 2;
System.out.println(doubledSupplier.get()); // 输出：20
```

#### 2. **缓存结果（Memoization）**
使用 Guava 的 `Suppliers.memoize` 缓存结果，避免重复计算：
```java
Supplier<ExpensiveObject> memoized = Suppliers.memoize(() -> new ExpensiveObject());
// 第一次调用会创建对象
ExpensiveObject obj1 = memoized.get();
// 后续调用返回缓存的对象
ExpensiveObject obj2 = memoized.get(); // obj1 == obj2
```

---

### **六、注意事项**
1. **线程安全性**  
   `Supplier` 的实现需自行保证线程安全，尤其是在多线程环境中。

2. **避免副作用**  
   `get()` 方法应尽量保持无状态（避免修改外部变量），符合函数式编程原则。

3. **性能考量**  
   高频调用 `get()` 时，需关注内部逻辑的性能（如复杂计算或IO操作）。

---

### **七、总结**
- **`Supplier<T>`** 是 Java 函数式编程的基础组件，用于生成值或对象。
- 核心优势：代码简洁、支持延迟计算、灵活解耦。
- 适用场景：工厂模式、默认值生成、流式数据处理等。