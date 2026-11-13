    for k in [0, 1, 2]:
        def h(x):
            if x < 2:
                return k*x + 1
            else:
                return x**2 - 1

        print("k =", k)
        for x in [1.9, 1.99, 1.999]:
            print(x, round(h(x), 3))
        print("h(2) =", h(2))
    ```

    Programmet viser at venstreverdiene nærmer seg 1 når \(k=0\), 3 når \(k=1\) og 5 når \(k=2\). I alle tilfellene er \(h(2)=3\).

.