export const actions = {
  default: async ({request}) => {
    const formData = await request.formData();
    console.log(formData.get("name"));
    console.log(formData.get("email"));
    console.log(formData.get("phone"));
    console.log(formData.get("message"));
  }
};