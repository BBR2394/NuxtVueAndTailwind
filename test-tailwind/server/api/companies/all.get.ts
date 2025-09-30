export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event)
    const name = getRouterParam(event, 'name')
    //const body = await readBody(event)
    const query = getQuery(event)



    console.log(`[Bebair Work Prjct][Get all /companies][query : page :${query.page} ; size : ${query.size}]`)
    
    const url = "http://" + config.serverApiAddr + ":" +config.serverApiPort + '/companies'
    console.log("[url]")
    console.log(url)

    const data = await $fetch(url)

    return data

    //return `Hello route : , ${name}!`


})