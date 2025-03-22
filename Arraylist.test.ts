import ArrayList from "./Arraylist";



describe("ArrayList", () => {
  let list: ArrayList<number>;

  beforeEach(() => {
    list = new ArrayList<number>();
  });

  test("should add elements", () => {
    list.add(1);
    list.add(2);
    list.add(3);
    expect(list.size()).toBe(3);
  });

  test("should remove elements", () => {
    list.add(1);
    list.add(2);
    list.add(3);
    list.remove(1);
    expect(list.size()).toBe(2);
    expect(list.get(0)).toBe(1);
    expect(list.get(1)).toBe(3);
  });

  test("should get elements", () => {
    list.add(1);
    list.add(2);
    list.add(3);
    expect(list.get(0)).toBe(1);
    expect(list.get(1)).toBe(2);
    expect(list.get(2)).toBe(3);
  });

  test("should check if it is empty", () => {
    expect(list.isEmpty()).toBe(true);
    list.add(1);
    expect(list.isEmpty()).toBe(false);
  });

  test("should clear the list", () => {
    list.add(1);
    list.add(2);
    list.add(3);
    list.clear();
    expect(list.isEmpty()).toBe(true);
  });
});