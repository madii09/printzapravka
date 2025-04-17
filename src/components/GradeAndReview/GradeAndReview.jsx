import React from 'react'
import styles from '../AboutUs/AboutUs.module.scss';
import { classNames } from '../../utils/classNames.js';
//img
import profile from '../../assets/xurshid-300x300.jpg';

const GradeAndReview = () => {
  return (
        <div className={classNames('bg-dark', 'grade-cards' , styles.aboutUs)}>
            <div className='container'>
                <h2>Отзывы наших клиентов</h2>
                <p>Мнение клиентов – лучший показатель качества наших услуг!</p>
  
                <div className='cards-review-and-grade'>
                    <div className='card-review'>
                        <span>
                            Компания отлично заправила мой картридж, и теперь мой принтер работает как новый! Услуга быстрая, качественная и доступная. Очень доволен качеством и обслуживанием!
                        </span>
                        <div className='comment-bio'>
                            <div className="profile-image"><img src={profile} alt="" /></div>
                            <div className="profile-info">
                                <strong className="profile-name">Хуршид Эргашов</strong>
                                <p className="profile des">ИТ-специалист</p>
                            </div>
                        </div>
                    </div>
                    <div className='card-review'>
                        <span>
                            Заправка картриджей здесь — это удобно и выгодно! Мой принтер после заправки стал работать лучше, а качество печати заметно улучшилось. Спасибо за быстрый и качественный сервис!
                        </span>
                        <div className='comment-bio'>
                            <div className="profile-image"><img src={profile} alt="" /></div>
                            <div className="profile-info">
                                <strong className="profile-name">Хуршид Эргашов</strong>
                                <p className="profile des">ИТ-специалист</p>
                            </div>
                        </div>
                    </div>
                    <div className='card-review'>
                        <span>
                            Заправка картриджей здесь — это удобно и выгодно! Мой принтер после заправки стал работать лучше, а качество печати заметно улучшилось. Спасибо за быстрый и качественный сервис!
                        </span>
                        <div className='comment-bio'>
                            <div className="profile-image"><img src={profile} alt="" /></div>
                            <div className="profile-info">
                                <strong className="profile-name">Хуршид Эргашов</strong>
                                <p className="profile des">ИТ-специалист</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GradeAndReview
