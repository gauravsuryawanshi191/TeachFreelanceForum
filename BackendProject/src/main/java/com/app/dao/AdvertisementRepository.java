package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Advertisement;

public interface AdvertisementRepository extends JpaRepository<Advertisement, Long> {

	// get job by skill
	Optional<Advertisement> findByOccupationTitle(String occupationTitle);

	@Query("select new Advertisement(occupationTitle,vacancyAvailable, salary, durationOfEmployment,workExperienceRequired, description, preferedGender, postingDate,skill) from Advertisement a where a.occupationTitle = :p")
	Optional<Advertisement> advertisementDescription(@Param("p") String advertisementDescription);

	@Query("select new Advertisement(occupationTitle,vacancyAvailable, salary, durationOfEmployment,workExperienceRequired, description, preferedGender, postingDate,skill) from Advertisement a where a.occupationTitle = :p and a.instituteRef.id =:ref")
	Optional<Advertisement> advertisementDescriptionforInstitute(@Param("p") String advertisementDescription,@Param("ref") Long instituteId);
}
