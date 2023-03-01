import styles from './Footer.module.css'
import {FaFacebook, FaLinkedin, FaInstagram} from 'react-icons/fa'

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul>
                <li><FaFacebook/></li>
                <li><FaInstagram/></li>
                <li><FaLinkedin/></li>
            </ul>
            <p><span>Costs</span> &copy; 2021</p>
        </footer>
    )
}

export default Footer