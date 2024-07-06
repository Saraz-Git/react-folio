export function validateEmail(email) {
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return re.test(String(email).toLowerCase());
}

export function validateName(name) {
    const re = /^([a-zA-Z]+)([\w\s]*)$/;
    return re.test(name);
}

