interface IHolidays {
  [index: string]:
    | {
        [index: string]: string | undefined;
      }
    | undefined;
}

export type { IHolidays };
