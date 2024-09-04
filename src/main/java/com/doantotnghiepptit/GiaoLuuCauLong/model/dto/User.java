package com.doantotnghiepptit.GiaoLuuCauLong.model.dto;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.Data;

import java.sql.Date;
import java.time.LocalDateTime;
import java.util.List;

@Data
public class User {
    private Long id;
    private String fullName;
    private String username;
    private String password;
    private String phoneNumber;
    private Date birthday;
    private LocalDateTime createAt;
    private LocalDateTime modifiedAt;
    private Boolean deleted;

}
