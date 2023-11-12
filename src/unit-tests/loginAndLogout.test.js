import { login } from "../js/api/auth/login.js";
import { logout } from "../js/api/auth/logout.js";
//mock local storage
const mockLocalStorage = (() => {
  let localStorage = {};
  let localStorageMethods = {
    getItem: (key) => localStorage[key],
    setItem: (key, value) => (localStorage[key] = value),
    removeItem: (key) => delete localStorage[key],
    clear: () => (localStorage = {}),
  };
  return localStorageMethods;
})();
//mock response
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve({
        name: "examplename",
        email: email,
        accessToken: "exampleTokenAbc123456789",
      }),
  }),
);
const email = "test12345@noroff.no";
const password = "abc12345";
global.localStorage = mockLocalStorage;
describe("login function fetches and stores an access token in local storage", () => {
  mockLocalStorage.clear();
  it("test that login works and the function fetches user info", async () => {
    let response = await login(email, password);
    expect(typeof response).toBe("object");
    expect(response.email).toBe(email);
  });
  it("tests if the accestoken exists and the function stores the accesstoken in local storage", async () => {
    expect(mockLocalStorage.getItem("token")).toBeTruthy();
    expect(mockLocalStorage.getItem("token")).toBe(
      '"exampleTokenAbc123456789"',
    );
    expect(mockLocalStorage.getItem("token").length).toBeGreaterThan(10);
  });
});
describe("test that checks if logout function deletes access token from local storage", () => {
  it("logs out when logout button is pressed", () => {
    logout();
    expect(mockLocalStorage.getItem("token")).toBeUndefined();
  });
});
