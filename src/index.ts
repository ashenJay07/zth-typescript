let employee: {
  id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Ashen",
  retire: (date: Date) => {
    console.log(date);
  },
};
