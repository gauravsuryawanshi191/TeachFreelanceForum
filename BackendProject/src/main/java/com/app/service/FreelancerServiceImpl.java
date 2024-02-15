package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.FreelancerRepository;
import com.app.pojos.Freelancer;

@Service
@Transactional

public class FreelancerServiceImpl implements FreelancerService {

	@Autowired
	private FreelancerRepository freelancerRepo;

	@Override
	public Optional<Freelancer> findById(Long id) {
		return freelancerRepo.findById(id);
	}

	@Override
	public Freelancer authenticateFreelancer(String email, String pass) {
		return freelancerRepo.findByEmailAndPassword(email, pass)
				.orElseThrow(() -> new RuntimeException("Freelancer login failed : Invalid Credentials"));
	}

	@Override
	public Freelancer addFreelancerDetails(Freelancer transientFreelancer) {
		return freelancerRepo.save(transientFreelancer);
	}

	@Override
	public Freelancer getFreelancerDetails(String firstName) {
		Freelancer user = freelancerRepo.findByFirstName(firstName)
				.orElseThrow(() -> new RuntimeException("No Freelancer found  " + firstName));
		return user;
	}

	@Override
	public Freelancer authenticateEmail(String em) {
		return freelancerRepo.findByEmail(em).orElseThrow(() -> new RuntimeException("Invalid Email"));
	}

	@Override
	public Integer updatePasswordWithEmail(String pass, String em) {
		return freelancerRepo.updatePassword(pass, em);
	}

	@Override
	public String deleteFreelancer(Long id) {
		freelancerRepo.deleteById(id);
		return "freelancer deleted";
	}

	@Override
	public List<Freelancer> getAllFreelancer() {
		return freelancerRepo.findAll();
	}

	@Override
	public Freelancer getFreelancerDetailsByEmail(String email) {
		return freelancerRepo.findByEmail(email).orElseThrow(() -> new RuntimeException("Invalid Email"));
	}

	@Override
	public Integer updateFreelancerQualificationDetails(Freelancer freelancer) {
		return freelancerRepo.updateFreelancerQualification(freelancer.getQualification(), freelancer.getUniversity(), freelancer.getGraduationMarks(), freelancer.getPassoutYear(), freelancer.getEmail());
	}
}
