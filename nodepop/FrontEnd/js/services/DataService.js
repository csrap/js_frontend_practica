
export default {

    AnnouncementParse: function (announcement) {

        announcement.photo = announcement.photo.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        announcement.name = announcement.name.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        announcement.price = announcement.price.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        announcement.saleOrbuy = announcement.saleOrbuy
        announcement.canDelete = announcement.userId === this.AuthUserId()
        return announcement
    },

    getAnnouncements: async function () {
        const url = 'http://localhost:8000/api/announcements?_expand=user'
        const response = await fetch(url)
        if (response.ok) {
            const announcements = await response.json()
            return announcements.map(announcement => this.AnnouncementParse(announcement))
        } else {
            throw new Error('Dont find Announcements')
        }
    },

    post: async function (url, body = {}) {
        return await this.request('POST', url, body)
    },

    delete: async function (url, body = {}) {
        return await this.request('DELETE', url, body)
    },

    request: async function (method, url, body) {
        const requestConfig = {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(body)
        }
        if (this.ConfirmIsAuthenticed()) {
            const token = localStorage.getItem('TOKEN_KEY')
            requestConfig.headers['Authorization'] = `Bearer ${token}`
        }
        const response = await fetch(url, requestConfig)
        try {
            const data = await response.json()
            if (response.ok) {
                return data
            } else {
                throw new Error(data.message)
            }
        } catch (error) {
            throw Error
        }
    },


    registerUser: async function (username, password) {
        const url = 'http://localhost:8000/auth/register'

        return await this.post(url, { username, password })

    },

    login: async function (username, password) {
        const url = 'http://localhost:8000/auth/login'
        const data = await this.post(url, { username, password })
        const token = data.accessToken
        localStorage.setItem('TOKEN_KEY', token)

    },

    createAnnouncement: async function (photo, name, price, saleOrbuy) {
        const url = 'http://localhost:8000/api/announcements'
        return await this.post(url, { photo, name, price, saleOrbuy })
    },

    ConfirmIsAuthenticed: function () {
        return localStorage.getItem('TOKEN_KEY') !== null
    },

    getAnnouncementDetail: async function (announcementID) {
        const url = `http://localhost:8000/api/announcements/${announcementID}?_expand=user`
        const response = await fetch(url)
        if (response.ok) {
            const announcement = await response.json()
            return this.AnnouncementParse(announcement)
        } else {
            if (response.status === 404) {
                return null
            } else {
                throw new error('Announcement not available')
            }
        }
    },

    deleteAnnouncement: async function (announcementID) {
        const url = `http://localhost:8000/api/announcements/${announcementID}`
        return await this.delete(url)

    },

    AuthUserId: function () {
        const token = localStorage.getItem('TOKEN_KEY')
        if (token === null) {
            return null
        }
        const b64Parts = token.split('.')
        if (b64Parts.length !== 3) {
            return null
        }
        const b64Data = b64Parts[1]
        try {
            const userJSON = atob(b64Data)
            const user = JSON.parse(userJSON)
            return user.userId
        } catch (error) {
            console.error('Error while decoding JWT Token', error)
            return null
        }
    },

    getUserName: function () {
        const token = localStorage.getItem('TOKEN_KEY')
        if (token === null) {
            return null
        }
        const b64Parts = token.split('.')
        if (b64Parts.length !== 3) {
            return null
        }
        const b64Data = b64Parts[1]
        try {
            const userJSON = atob(b64Data)
            const user = JSON.parse(userJSON)
            return user.username
        } catch (error) {
            console.error('Error while decoding JWT Token', error)
            return null
        }
    }

}
