package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.FreelancerRepository;
import com.app.dto.FreelancerDTO;
import com.app.pojos.Freelancer;

@Service
@Transactional

public class FreelancerServiceImpl implements FreelancerService {

	@Autowired
	private FreelancerRepository freelancerRepo;
	
	@Autowired
	private ModelMapper mapper;

	@Override
	public FreelancerDTO findById(Long id) {
		return mapper.map(freelancerRepo.findById(id).orElseThrow(() -> new RuntimeException("Freelancer login failed : Invalid Credentials")),FreelancerDTO.class);
	}

	@Override
	public FreelancerDTO authenticateFreelancer(String email, String pass) {
		freelancerRepo.findByEmail(email).orElseThrow(() -> new RuntimeException("Invalid email id"));
		return mapper.map(freelancerRepo.findByEmailAndPassword(email, pass)
				.orElseThrow(() -> new RuntimeException("Freelancer login failed : Invalid Credentials")),FreelancerDTO.class);
	}

	@Override
	public FreelancerDTO addFreelancerDetails( FreelancerDTO freelancerDto) {
		Freelancer freelancer = mapper.map(freelancerDto, Freelancer.class);
		return mapper.map(freelancerRepo.save(freelancer),FreelancerDTO.class);
	}

	@Override
	public FreelancerDTO getFreelancerDetails(String firstName) {
		FreelancerDTO user = mapper.map(freelancerRepo.findByFirstName(firstName)
				.orElseThrow(() -> new RuntimeException("No Freelancer found  " + firstName)),FreelancerDTO.class);
		return user;
	}

	@Override
	public FreelancerDTO authenticateEmail(String em) {
		return mapper.map(freelancerRepo.findByEmail(em).orElseThrow(() -> new RuntimeException("Invalid Email")),FreelancerDTO.class);
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
	public List<FreelancerDTO> getAllFreelancer() {
		return freelancerRepo.findAll().stream().map(f->mapper.map(f, FreelancerDTO.class)).collect(Collectors.toList());
	}

	@Override
	public FreelancerDTO getFreelancerDetailsByEmail(String email) {
		return mapper.map(freelancerRepo.findByEmail(email).orElseThrow(() -> new RuntimeException("Invalid Email")),FreelancerDTO.class);
	}

	@Override
	public Integer updateFreelancerQualificationDetails(FreelancerDTO freelancerDto) {
		Freelancer freelancer = mapper.map(freelancerDto, Freelancer.class);
		return freelancerRepo.updateFreelancerQualification(freelancer.getQualification(), freelancer.getUniversity(), freelancer.getGraduationMarks(), freelancer.getPassoutYear(), freelancer.getEmail());
	}
}
