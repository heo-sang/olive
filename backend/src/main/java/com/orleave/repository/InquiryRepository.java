package com.orleave.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.orleave.entity.Inquiry;

@Repository
public interface InquiryRepository extends JpaRepository<Inquiry, Integer> {
	Page<Inquiry> findByUserNo(int userNo, Pageable pageable);
	Page<Inquiry> findAll(Pageable pageable);
	long deleteByUserNo(int userNo);
}
