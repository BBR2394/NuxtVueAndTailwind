export default defineEventHandler((event) => {
    const config = useRuntimeConfig(event)
    const name = getRouterParam(event, 'name')
    const query = getQuery(event)



    console.log(`[Bebair Work Prjct][Get /test][query : page :${query.page} ; size : ${query.size}]`)
    
    const url = config.serverApiAddr + config.serverApiPort + '/companies'
    console.log("[url]")
    //console.log(url)
    return `Hello route : , ${name}!`


})