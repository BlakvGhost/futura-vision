import axios from "axios";

export default function session(self) {
    self.$defaultTitle = "FuturaVision";
    self.$api_url = "https://futura-vision-api.42web.io/api/";
    self.$storage_url = "https://futura-vision-api.42web.io/storage/";
    self.$authSessionName = "_DoNotTryOpening__FV++U76";

    self.$token = function() {
        let auth = JSON.parse(sessionStorage.getItem(this.$authSessionName)) ?? 
        {token: `1|FUiFyHIRbjVwPOkVRINSo8RXGZmnbDZf0QdvuoU3`};
        return {
            headers: {
                Authorization: "Bearer " + auth["token"],
            },
        }
    }
    self.$http = axios.create({
        baseURL: self.$api_url,
    });

    self.$currentUser = function() {
        let auth = JSON.parse(sessionStorage.getItem(this.$authSessionName)) ?? {};

        if (!auth['token']) {
            this.$http.post('login', {
                email: 'fv2022@gmail.com',
                password: 'password'
            }).then( data => {
                sessionStorage.setItem(this.$authSessionName, JSON.stringify(data.data.data));
            });
        }else if(auth['role'] !== 'get'){
            this.$http.get('current-user', this.$token()).then( data => {
                sessionStorage.setItem(this.$authSessionName, JSON.stringify(data.data.data));
            }).catch( error => {
                sessionStorage.removeItem(this.$authSessionName);
            })
        }

        return auth['role'] !== 'get'? 
                                auth: 
                                false
    }
    self.$logout = function() {
        sessionStorage.removeItem(this.$authSessionName);
        self.$currentUser();
    }
    self.$url = function(title) {
        let _y = typeof title  === 'string'? 
        title: " ";

        return _y.replace(/[^a-zA-Z0-9\-]/g, '-').toLowerCase();
    }
    self.$reduce = function(data, length) {
        let _y = data ?? [];

        if (_y.length < length) {
            return data;
        }

        return _y.slice(0, length) + "..."
    }
    self.$reverse = function(data) {
        return data;
        return Array.isArray(data)? data.reverse(): [{}];
    }
    self.$avoid = function(object, key) {
        try {
            return object[key] ?? " "
        } catch (error) {
            return " ";
        }
    }
    self.$avoidr = function(object, key) {
        try {
            return object[key] ?? []
        } catch (error) {
            return [];
        }        
    }
    self.$loadImage = function(link) {
        let uri = link ?? 'default.png';
        return self.$storage_url + uri;
    }
    self.$loadImageFV = function(link) {
        let uri = link ?? 'logo.jpg';
        return self.$storage_url + uri;
    }
}