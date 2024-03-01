package com.app.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AdvertisementDTO;
import com.app.dto.ApiResponse;
import com.app.service.AdvertisementService;

@CrossOrigin(origins = "*")
//http://localhost:3000
@Validated
@RestController
@RequestMapping("/api/Advertisement")
public class AdvertisementController {

	@Autowired
	private AdvertisementService advertisementService;

	public AdvertisementController() {
		System.out.println("in ctor of " + getClass());
	}

	@PostMapping("/{instituteId}")
	public ResponseEntity<?> addAdvertisementDetails(@Valid @PathVariable Long instituteId,
			@Valid @RequestBody AdvertisementDTO advertisementDto) {
		System.out.println("in add emp " + advertisementDto+"  id"+instituteId);
		try {
		return new ResponseEntity<>(advertisementService.addNewAdvertisement(instituteId, advertisementDto),
				HttpStatus.CREATED);
		}
		catch (RuntimeException e) {
			System.out.println("in catch " + e.getMessage());
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new ApiResponse(e.getMessage()));
		}

	}

	// for institute
	@GetMapping("/{instituteId}")
	public ResponseEntity<?> getInstituteAdvertisements(@Valid @PathVariable Long instituteId) {
		System.out.println("in get Advertisement of specific institute " + instituteId);
		return ResponseEntity.status(HttpStatus.OK).body(advertisementService.fetchInstituteAdvertisements(instituteId));
	}

	// for freelancer
	@GetMapping
	public ResponseEntity<?> getAllAdvertisementDetails() {
		System.out.println("in get all Advertisements");
		return new ResponseEntity<>(advertisementService.getAllAdvertisement(), HttpStatus.OK);
	}

	// get advertisement for update operation
	@GetMapping("/get/{advertisementId}")
	public ResponseEntity<?> getAdvertisementDetails(@Valid @PathVariable Long advertisementId) {
		System.out.println("in get specific Advertisement details");
		try {
			return new ResponseEntity<>(advertisementService.fetchAdvertisementDetails(advertisementId), HttpStatus.OK);
		} catch (RuntimeException e) {
			System.out.println("in catch " + e.getMessage());
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
		}

	}

	@DeleteMapping("/{advertisementId}")
	public ResponseEntity<?> deleteAdvertisementById(@Valid @PathVariable Long advertisementId) {
		advertisementService.removeAdvertisementById(advertisementId);
		return new ResponseEntity<>("deleted", HttpStatus.OK);
	}

	@PutMapping("/{instituteId}/{advertisementId}")
	public ResponseEntity<?> editAdvertisementDetails(@Valid @PathVariable Long instituteId,
			@Valid @PathVariable Long advertisementId,@Valid @RequestBody AdvertisementDTO advertisementDto) {
		System.out.println("in update Advertisement " + instituteId + advertisementId);
		
		return new ResponseEntity<>(
				advertisementService.updateAdvertisementDetails(instituteId, advertisementId, advertisementDto),
				HttpStatus.OK);
	}

	@PutMapping("/put")
	public ResponseEntity<?> updateAdvertisementDetails(@Valid @RequestBody AdvertisementDTO e) // de-serial (un marshalling)
	{
		// e : DETACHED POJO , containing updated state
		System.out.println("in add AdvertisementDTO " + e);
		return new ResponseEntity<>(advertisementService.addOrUpdateFreelancerDetails(e), HttpStatus.CREATED);
	}
	
}
