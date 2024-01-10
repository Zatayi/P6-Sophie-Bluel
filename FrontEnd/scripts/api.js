const URL_WORKS = "http://localhost:5678/api/works"
const URL_CATEGORIES = "http://localhost:5678/api/categories"
const URL_LOGIN = "http://localhost:5678/api/users/login"

export const getWorks = () => fetch(URL_WORKS).then(res => res.json())
export const getCategories = () => fetch(URL_CATEGORIES).then(res => res.json())
export const getWorksByCategoryId = categoryId => getWorks().then(data => data.filter(item => item.categoryId === categoryId))

export const postLogin = data => fetch(URL_LOGIN, {
    method: "POST",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
}).then((response) => {
    if (response.status !== 200) {
        throw "Erreur dans l’identifiant ou le mot de passe"
    }
    return response.json()
})