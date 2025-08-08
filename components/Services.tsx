import Link from "next/link";
import styles from "../styles/Services.module.scss";

type Service = {
  title: string;
  description: string;
  icon: string;
  email_subject: string;
};

type ServicesProps = {
  dictionary: {
    services: {
      title: string;
      subtitle: string;
      contact: string;
      softwaredeveloper: Service;
      webdeveloper: Service;
      teacher: Service;
    };
  };
};

const ServicesPage = ({ dictionary }: ServicesProps) => {
  const t = dictionary.services;

  const services: Service[] = [
    t.softwaredeveloper,
    t.webdeveloper,
    t.teacher,
  ];

  return (
    <section className={styles.servicesContainer}>
      <h2 className={styles.title}><i className="material-icons">build</i> {t.title}</h2>
      <p className={styles.subtitle}>
        {t.subtitle}
      </p>

      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <i className="material-icons">{service.icon}</i>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <Link
              href={`mailto:dennisturco@gmail.com?subject=${service.email_subject}`}
              target="_blank"
              className={styles.contactButton}
            >
              {t.contact}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesPage;
