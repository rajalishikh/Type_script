const user: {
  readonly Organization: string;
  first_name: string;
  middle_name?: string; // optional
  last_name: string;
} = {
  Organization: "edu_poribar",
  first_name: "Raj",
  middle_name: "Ali",
  last_name: "Sheikh",
};

console.log(user);
