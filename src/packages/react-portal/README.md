# Для чего

Порталы помогают добавить любой компонент в "отдалееного" родителя, в котором отрендерится компонент.
В нашем случае, например, мы можем добавить компонент Модального окна в специальный родительский Provider, который для этого предназначен.

# В чем особенность нашей реализации?

Мы можем компонентам давать возможность резолвиться (выдавать ответ). А запрашивающему - возможность контролировать, что ответил конкретный компонент перед уничтожением

# Как использовать

Для начала нужно создать портал

```typescript
const { Provider, Controller } = createPortal(); // Можно создать со своей реализацией STORE
```

Далее Provider нужно добавить в DOM дерево, где мы хотим рендерить внутренние компоненты, например:

```typescript
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider />    // <<-- Вот он
    <App />
  </React.StrictMode>,
);
```

После чего мы можем в любом месте кода использовать Controller для создания компонентов через Portal

```typescript
const promise = Controller.create(CustomComponent, {}); // Component, Props

// Первый вариант
const result = await promise;

// Второй вариант (мы хотим уничтожить компонент до выдачи результата)
promise.destroy();

// Мы хотим иметь возможность работы с ReactNode созданного компонента
promise.node;

// Максимально сокращенный вариант при обычном использовании
const result = await Controller.create(CustomComponent, {});
```

# Как правильно определять компоненты, которые в будущем будут показываны в Portal

Логично, что компонент должен иметь возможность выбрать, в какой момент он готов выдать ответ или исключение. Так же мы хотим из коробки поддерживать типизацию

Пример простого компонента:

```typescript
export interface TestProps extends PortalProps<string> {
  name: string;
  lastname: string;
}

function Test(props: TestProps) {
  return (
    <div>
      <div>Name: {props.name}</div>
      <div>Lastname: {props.lastname}</div>
      <button onClick={() => props.portal.resolve('123')}>Resolve</button>
      <button onClick={() => props.portal.reject('reason')}>Reject</button>
    </div>
  );
}
```

Стоит отметить, что компонент **МОЖЕТ НЕ ИМЕТЬ portal** в Props. Это будет означать, что компонент создавался без использования Controller.

Ниже пример, как использовать Test компонент

```typescript
try {
  const result = await Controller.create(Test, { name: 'Ravil', lastname: 'Berish' });
  console.log(result); // 123
} catch (err) {
  console.log(err); // reason
}
```
