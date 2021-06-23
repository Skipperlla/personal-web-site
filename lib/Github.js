export const GetRepository = async () => {
  return await fetch("https://api.github.com/users/Skipperlla/repos");
};
