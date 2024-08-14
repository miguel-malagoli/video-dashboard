export function sortByDate(obj1: { date: Date }, obj2: { date: Date }) {
    return obj2.date.valueOf() - obj1.date.valueOf();
}
