function Hello() {

    let myName = 'Sanket'
    let number = 456

    let fullName = () => {
        return "Sanket V"
    }

    return <p>
        {/* Hello, this is the future speaking. I am your master {myName} */}
        MessageNo: {number}. I am your master {fullName()}
    </p>
}

export default Hello;