package com.doantotnghiepptit.GiaoLuuCauLong.model.dto;

import jakarta.persistence.*;
import lombok.Data;

@Data
public class Post {
    private Long id;
    private String courtName;
    private String phoneNumber;
    private String linkFacebook;
    private String description;

}
