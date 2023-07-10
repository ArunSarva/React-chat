export const LOADER = "LOADER";


export function UpdateLoader(data) {
  console.log(data,"arun")
  return {
    type: LOADER,
    payload: data,
  };
}

