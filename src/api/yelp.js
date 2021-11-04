import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer DWgJEZhu6NmFt7qIrBEfpe6KIeR-eVXko0dOKFEBxIUNwwozOGia1p6-cxrTzPWc29drW-AUfTyVc89ZwanpVdKW_bNXQTM4uouMjz0IdDd-RUhM7d2AWIJsvsqCYXYx",
  },
});
