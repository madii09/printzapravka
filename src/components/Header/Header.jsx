import { Button } from '../Button/Button';
import { classNames } from '../../utils/classNames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GuaranteeSvg } from '../SVGIcons/GuaranteeSVG.jsx';
import { QualityCheckSvg } from '../SVGIcons/QualityCheckSVG.jsx';
import { Modal } from '../Modal/Modal.jsx';

import styles from './Header.module.scss';
import { faLongArrowAltRight, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

import LogoImg from '../../assets/logo.png';
import BannerImg from '../../assets/banner-bg-img.png';
import BannerColorImg from '../../assets/banner-bg-color.png';
import { useState } from 'react';

export const Header = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalContent, setModalContent] = useState(null);

	const openModal = content => {
		setModalContent(content); // Set the dynamic content for the modal
		setIsModalOpen(true); // Open the modal
	};

	// Close the modal
	const closeModal = () => {
		setIsModalOpen(false);
	};
	const handlePhoneClick = e => {
		e.preventDefault(); // Prevent the default phone call behavior
		openModal(<p>You are about to call: +998 94 051 14 94</p>); // Pass the content for the modal
	};

	return (
		<header className={classNames('bg-dark', styles.header)}>
			<div className='container'>
				<nav className={styles.nav}>
					<a href='#'>
						<img src={LogoImg} alt='logo' />
					</a>

					<div className={styles.call}>
						<a href='tel:+998940511494' className={styles.callContent} onClick={handlePhoneClick}>
							<FontAwesomeIcon icon={faPhoneAlt} rotation={90} color={'black'} />
						</a>
					</div>
					{isModalOpen && <Modal content={modalContent} onClose={closeModal} />}
				</nav>

				<div className={styles.content}>
					<div className={styles.right}>
						<h1>Заправка картриджей в Ташкенте.</h1>
						<p>Ремонт и заправка картриджей. Оперативный выезд мастера на дом и в офис!</p>

						<ul>
							<li>
								<QualityCheckSvg />
								<span>Быстро и качественно</span>
							</li>

							<li>
								<GuaranteeSvg />
								<span>Гарантия на услуги</span>
							</li>
						</ul>

						<div>
							<Button
								onClick={() => openModal(<p>This is the content for the first button.</p>)}
								size={'lg'}
								iconAfter={faLongArrowAltRight}
								className={styles.rightButton}
							>
								+998 94 051 14 94
							</Button>

							{isModalOpen && <Modal content={modalContent} onClose={closeModal} />}
						</div>
					</div>
					<div className={styles.left}>
						<img src={BannerImg} alt='Заправка картриджей в Ташкенте' />
						<img className={styles.backgroundColor} src={BannerColorImg} alt='none' />
					</div>
				</div>
			</div>
		</header>
	);
};
